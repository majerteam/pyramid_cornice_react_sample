from pyramid.view import view_config

from cornice import Service


@view_config(route_name='home', renderer='webapp/%s/index.html')
def my_view(request):
    return {'project': 'pyramid_starter_seed'}


_USERS = [
    {'name': 'Gaston Tjebbes', 'description': "Co founder @ majerti", 'id': 15},
    {'name': "Feth Arezki", "description": "Co founder @ majerti", 'id': 16}
]
users = Service(name='users', path='/users', description="User registration")


@users.get()
def get_users(request):
    """Returns a list of all users."""
    return {'users': _USERS}


@users.post()
def create_user(request):
    """Adds a new user."""
    user = request.validated['user']
    _USERS[user['name']] = user['token']
    return {'token': '%s-%s' % (user['name'], user['token'])}


@users.delete()
def del_user(request):
    """Removes the user."""
    name = request.validated['user']
    del _USERS[name]
    return {'Goodbye': name}
