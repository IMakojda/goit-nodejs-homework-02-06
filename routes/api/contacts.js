const express = require('express');
const router = express.Router();
const { validateRequest } = require('../../midleware/validateRequest');

const {
  schemaCreate,
  schemaPatch,
} = require('../../models/contacts')

const {
  getAll,
  getById,
  deleteById,
  createContact,
  updateById,
  updateStatusContact
} = require('../../controllers/contactControllers');

const { auth } = require('../../midleware/auth');

router.get('/', auth, getAll)
router.get('/:contactId', auth, getById);
router.patch('/:contactId', auth, validateRequest(schemaPatch), updateStatusContact);
router.post('/', auth, validateRequest(schemaCreate), createContact);
router.put('/:contactId', auth, updateById);
router.delete('/:contactId', auth, deleteById)

module.exports = router;