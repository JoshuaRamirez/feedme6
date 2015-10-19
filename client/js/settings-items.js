Template.settingsItems.events({
  'keypress #new-item': (e, t) => {
    if (e.keyCode === 13) {
      var input = t.find('input[type=text]');
      if (input.value) {
        List.insert({name: input.value, owner: Meteor.userId()});
        input.value = '';
      }
    }
  }
});

Template.settingsItems.helpers({
  list() {
    return List.find({});
  }
});

Template.settingsItem.events({
  'click .confirm-delete-item': function (e, t) {
    List.remove({_id: t.data._id});
    e.preventDefault();
    e.stopPropagation();
  },
  'click .delete-item': function (e) {
    $($(e.currentTarget).attr('data-modal')).openModal()
  }
});

