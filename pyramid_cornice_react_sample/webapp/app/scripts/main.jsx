var EntryBox = React.createClass({
  getInitialState: function(){
    return {'users': [], 'formVisible': false};
  },
  componentDidMount: function(){
    $.ajax({
      url: this.props.url,
      cache: false,
      dataType: 'json',
      success: function(data){
        this.setState({users: data.users});
      }.bind(this)
    });
  },
  showEditForm: function(datas){
    console.log("Show edition form");
    console.log(this._form);
    this._form.setState({visible: true});
    this._form.setState(datas);
  },
  showAddForm: function(){
    this.showEditForm({});
  },
  onAddEdit: function(datas){
    var users = this.state.users;
    if (typeof(datas.id) != 'undefined'){
      var result = [];
      this.state.users.map(function(user){
        if (user.id == datas.id){
          result.push(datas);
        } else {
          result.push(user);
        }
      });
      this.setState({users: result});
    }else{
      datas.id = 18;
      var newusers = users.concat([datas]);
      this.setState({users: newusers})
    }
    this._form.setState({visible: false});
  },
  render: function(){
    return (
    <div className="entrybox">
      <button className='btn btn-info' onClick={this.showAddForm}>Ajouter</button>
       <EntryForm
            onAddEdit={this.onAddEdit}
            ref={(c) => this._form = c}/>
      <EntryList users={this.state.users} showEditForm={this.showEditForm} />
      </div>
    );
  }
});
var EntryForm = React.createClass({
  getInitialState: function(){
    return {visible: false, name:'', description: ''};
  },
  changeName: function(e){
    this.setState({'name': e.target.value});
  },
  changeDescription: function(e){
    this.setState({'description': e.target.value});
  },
  onSubmit: function(e){
    e.preventDefault();
    this.props.onAddEdit(this.state);
  },
  render: function(){
    return (
    <div>
      {
        this.state.visible
        ? <form className='form' onSubmit={this.onSubmit}>
          <div class='control'>
            <input
              value={this.state.name}
              placeholder='The name'
              onChange={this.changeName}>
            </input>
          </div>
          <div class='control'>
            <input
              value={this.state.description}
              placeholder='The description'
              onChange={this.changeDescription}>
            </input>
          </div>
          <input className="btn btn-success" type='submit' value="Ok" />
        </form>
        : null
      }
      </div>
    );
  }
});
var EntryList = React.createClass({
  render: function(){
    var userlist = this.props.users.map(function(user){
      return (
        <Entry user={user} key={user.id} onEdit={this.props.showEditForm}/>
      );
    }.bind(this));
      return (
      <table className="table table-stripped table-bordered table-rounded">
      <thead><tr><th>Name</th><th>Description</th><th></th></tr></thead>
      <tbody>
      {userlist}
      </tbody>
      </table>
      );
  }
});
var Entry = React.createClass({
  handleEditClick: function(){
    this.props.onEdit(this.props.user);
  },
  render: function(){
      return (
        <tr>
          <td>{this.props.user.name}</td>
          <td>{this.props.user.description}</td>
          <td>
            <button onClick={this.handleEditClick} className='btn btn-default'>
              Modifier
            </button>
          </td>
        </tr>
      );
  }
});
ReactDOM.render(
  <EntryBox url="/users"/>,
  document.getElementById('content')
);
