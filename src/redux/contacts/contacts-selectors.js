import { getFilter } from "redux/filter/filter-selectors";

export const getContacts = state => state.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const getFilteredContacts = state => {
    const filter = getFilter(state);
    const contacts = getContacts(state);
  
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter) || number.includes(normalizeFilter);
      return result;
    })
    return filteredContacts;
  }
