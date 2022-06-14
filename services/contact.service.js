const { Contact } = require('../models/contacts');

const listContacts = async (query) => {
  const { page, limit, favorite } = query;
  const skipped = (page - 1) * limit;
  const skip = skipped < 0 ? 0 : skipped;
  if (favorite) { return Contact.find({ favorite }, {}, { skip, limit: +limit }); }
  else
    return Contact.find({}, {}, { skip, limit: +limit });
}

const getContactById = async (contactId) => {
  return Contact.findById(contactId);
}

const removeContact = async (contactId) => {
  return Contact.findByIdAndDelete(contactId);
}

const addContact = async (contact, id) => {
  return Contact.create({ ...contact, owner: id });
}

const updateContact = async (contactId, contact,) => {
  return Contact.findByIdAndUpdate(contactId, contact, { new: true })
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}