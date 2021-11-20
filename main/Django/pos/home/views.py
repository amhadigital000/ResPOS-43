from django.http import request
from django.shortcuts import redirect, render
from django.core import serializers
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.


class Food():
    def __init__(self, id, title, price, imglink, type):
        self.id = id
        self.title = title
        self.price = price
        self.description = "This is a food!"
        self.imglink = imglink
        self.type = type


menu = [
    Food(1, 'Hamburger', 10000, "./static/images/dish-1.png", "food"),
    Food(2, 'Coca Cola', 20000, "./static/images/dish-2.png", "drink"),
    Food(3, 'Chocolate Cake', 30000, "./static/images/dish-3.png", "dessert"),
    Food(4, 'Pizza', 40000, "./static/images/dish-4.png", "food"),
    Food(5, 'Turkey', 50000, "./static/images/dish-5.png", "special"),
    Food(6, 'Fried Chicken', 55000, "./static/images/dish-6.png", "food")
]


def delete_cart_item(request):
    if request.method == "POST":
        cart = request.session.get('cart')
        item_id = request.POST["id"]
        if len(cart) > 0:
            cart = [x for x in cart if x['id'] != int(item_id)]
        else: 
            return redirect('/')
        print(cart)
        request.session['cart'] = cart

    return redirect('/')

def filter_menu(request):
    return redirect('/')


def add_to_cart(request):
    if request.method == "POST":
        food_id = int(request.POST['id'])
        quantity = int(request.POST['number'])
        cart = request.session.get('cart')

        food = [x for x in menu if x.id == int(food_id)]
        food = food[0]
        inserted_food = {'id': food.id, 'title': food.title,
                         'quantity': quantity, 'imglink': food.imglink, 'unit_price': food.price}

        if not cart:
            cart = [inserted_food]
        else:
            find_item = [x for x in cart if x['id'] == int(food_id)]
            if len(find_item) > 0:
                for item in cart:
                    if item['id'] == int(food_id):
                        item['quantity'] = int(item['quantity']) + int(quantity)
                        break                    
            else:
                cart += [inserted_food]
        request.session['cart'] = cart

    return redirect('/')

def change_order_type(request):
    if request.method == "POST":
        order_type = request.session.get('order_type')
        if not order_type:
            order_type = "DINE IN"
            request.session['order_type'] = order_type
        elif order_type == "DINE IN":
            order_type = "TAKE AWAY"
            request.session['order_type'] = order_type
        elif order_type == "TAKE AWAY":
            order_type = "DINE IN"
            request.session['order_type'] = order_type
    
        next = request.POST.get('path', '/')
        print(next)
        return HttpResponseRedirect(next)
    return redirect('/')

def index(request):
    context = {}  # dictionary
    list_food = menu
    if request.method == "GET":
        filter = request.GET.get('filter')
        if filter is not None:
            list_food = [x for x in menu if x.type == filter]
        
    context['menu'] = list_food

    order_type = request.session.get('order_type')
    if not order_type:
        order_type = "DINE IN"
        request.session['order_type'] = order_type
    context['order_type'] = order_type

    cart = request.session.get('cart')
    if not cart:
        cart = []
    # del request.session['cart']
    if (len(cart) != 0):
        cart = [x for x in cart if len(x) == 5]


    context['cart'] = cart
    # fix total_item = sum quantity
    total_item = 0
    if(len(cart) != 0):
        total_item = [int(x['quantity']) for x in cart]
        total_item = sum(total_item)
        
    context['total_item'] = total_item
    total_price = 0
    if total_item > 0:
        total_price = [int(x['quantity']) * int(x['unit_price']) for x in cart]
        total_price = sum(total_price)    
    context['total_price'] = total_price
    print(cart)
    return render(request, 'pages/home.html', context)

def payment_visa(request):
    return render(request, 'pages/payment-visa.html')

def payment_momo(request):
    return render(request, 'pages/payment-momo.html')