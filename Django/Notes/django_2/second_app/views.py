from django.shortcuts import render
from second_app.forms import User_Form

# Create your views here.
def help(request):
    my_dictionary = {
        'help_page_tag':'Help Page'
    }
    return render(request,'second_app/help.html',context=my_dictionary)


def index_og(request):
    my_dictionary = {
        'index_page_tag':'Index Page'
    }
    return render(request,'second_app/index_og.html',context=my_dictionary)

def index(request):
    return render(request,'second_app/index.html')


def users_og(request):
    users_list = User.objects.order_by('last_name')
    user_dict = {'users': users_list}
    return render(request,'second_app/users_og.html',context=user_dict)


def users(request):
    form = User_Form()
    if request.method == 'POST':
        form = User_Form(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('ERROR FORM INVALID')

    return render(request, 'second_app/users.html', {'form':form})
