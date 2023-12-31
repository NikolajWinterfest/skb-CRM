// IMPORT // "function (Add contact)" and "svg (Icons)"
import { createContact } from './createContact.js'
import { svgIcons } from './svg.js'
// _________________________ BLOCK OF FORM _________________________ //
export const createClientForm = () => {
    // ----- CREATE ELEMENT'S FOR MODAL WINDOW ----- //
    // Create // "h2", "button (Close)", "form"
    const clientBlockTitle = document.createElement('h2')
    const clientBlockForm = document.createElement('form')
    const clientBlockBtnClose = document.createElement('button')
    // Create // "div (subblock of label & input)"
    const clientBlockDivName = document.createElement('div')
    const clientBlockDivLastname = document.createElement('div')
    const clientBlockDivSurname = document.createElement('div')
    // Create // "input", "label"
    const clientBlocklabelName = document.createElement('label')
    const clientBlocklabelLastName = document.createElement('label')
    const clientBlocklabelSurname = document.createElement('label')
    const clientBlockInputName = document.createElement('input')
    const clientBlockInputSurname = document.createElement('input')
    const clientBlockInputLastName = document.createElement('input')
    // Create // "span (required)" FOR label
    const clientBlocklabelNameRequired = document.createElement('span')
    const clientBlocklabelSurnameRequired = document.createElement('span')
    // Create // "div (subblock of button Add contact)"
    const clientBlockBtnDivAddContact = document.createElement('div')
    // Create // "button (Add contact)"
    const clientBlockBtnAddContact = document.createElement('button')
    // Create // "span (text & icon)" FOR button (Add Contact)
    const clientBlockBtnAddContactIcon = document.createElement('span')
    const clientBlockBtnAddContactIconActive = document.createElement('span')
    const clientBlockBtnAddContactTEXT = document.createElement('span')
    // Create // "div (subblock of button Save & Cancel)"
    const clientBlockBtnSaveAndCancel = document.createElement('div')
    // Create // "button (Save and Cancel)"
    const clientBlockBtnSave = document.createElement('button')
    const clientBlockBtnSaveSpinner = document.createElement('span')
    const clientBlockBtnSaveText = document.createElement('span')
    const clientBlockBtnCancel = document.createElement('button')

    // Create // for Validate
    const errorBlock = document.createElement('div')
    const unacceptableLetter = document.createElement('span')
    const errorBlockName = document.createElement('span')
    const errorBlockSurname = document.createElement('span')
    const errorBlockLastName = document.createElement('span')
    const errorBlockUncorrectText = document.createElement('span')
    const errorBlockRequiredValue = document.createElement('span')
    const errorBlockRequiredContact = document.createElement('span')

    // ----- TEXT FOR ELEMENT'S ----- //
    clientBlocklabelNameRequired.textContent = '*'
    clientBlocklabelSurnameRequired.textContent = '*'
    clientBlocklabelName.textContent = 'Name'
    clientBlocklabelLastName.textContent = 'Lastname'
    clientBlocklabelSurname.textContent = 'Surname'
    // Text // For modal window
    clientBlockTitle.textContent = 'New client'
    clientBlockBtnClose.innerHTML = svgIcons.addClientBtnClose
    clientBlockBtnAddContactIcon.innerHTML = svgIcons.iconAddContact
    clientBlockBtnAddContactIconActive.innerHTML = svgIcons.iconAddContactHoverActive
    clientBlockBtnSaveSpinner.innerHTML = svgIcons.saveSpinnerIcon
    clientBlockBtnAddContactTEXT.textContent = 'Add contact'
    clientBlockBtnSaveText.textContent = 'Save'
    clientBlockBtnCancel.textContent = 'Cancel'

    // Get attribute // For Validate
    errorBlock.classList.add('modalblock__error')
    unacceptableLetter.id = 'unacceptableLetter'
    errorBlockName.id = 'error-name'
    errorBlockSurname.id = 'error-surname'
    errorBlockLastName.id = 'error-lastname'
    errorBlockUncorrectText.id = 'error-uncorrecttext'
    errorBlockRequiredValue.id = 'error-requiredvalue'
    errorBlockRequiredContact.id = 'error-requiredcontact'

    // Get attribute //
    clientBlockInputName.type = 'text'
    clientBlockInputLastName.type = 'text'
    clientBlockInputSurname.type = 'text'
    clientBlockInputName.id = 'input-name'
    clientBlockInputLastName.id = 'input-lastname'
    clientBlockInputSurname.id = 'input-surname'
    clientBlocklabelName.htmlFor = 'input-name'
    clientBlocklabelLastName.htmlFor = 'input-lastname'
    clientBlocklabelSurname.htmlFor = 'input-surname'

    // ----- ADD ELEMENT'S ----- //
    // Add // form ← div (subblock of label & input)
    clientBlockForm.append(
        clientBlockDivName,
        clientBlockDivSurname,
        clientBlockDivLastname,
        clientBlockBtnDivAddContact,
        errorBlock,
        clientBlockBtnSaveAndCancel
    )
    // Add // Validate
    errorBlock.append(
        unacceptableLetter,
        errorBlockName,
        errorBlockSurname,
        errorBlockLastName,
        errorBlockUncorrectText,
        errorBlockRequiredValue,
        errorBlockRequiredContact
    )
    // Add // div (subblock of label & input) ← label & input (NAME, SURNAME, LASTNAME)
    clientBlockDivName.append(clientBlockInputName, clientBlocklabelName)
    clientBlockDivSurname.append(clientBlockInputSurname, clientBlocklabelSurname)
    clientBlockDivLastname.append(clientBlockInputLastName, clientBlocklabelLastName)
    // Add // div ← button (Add contact)
    clientBlockBtnDivAddContact.append(clientBlockBtnAddContact)
    // Add // button (Add contact) ← span, svg (text & icon)
    clientBlockBtnAddContact.append(
        clientBlockBtnAddContactIcon,
        clientBlockBtnAddContactIconActive,
        clientBlockBtnAddContactTEXT
    )
    clientBlockBtnSaveAndCancel.append(clientBlockBtnSave, clientBlockBtnCancel)
    // Add // span (save) ← span (spinner icon)
    clientBlockBtnSave.append(clientBlockBtnSaveSpinner, clientBlockBtnSaveText)
    // Add // span (text) ← span (required)
    clientBlocklabelName.append(clientBlocklabelNameRequired)
    clientBlocklabelSurname.append(clientBlocklabelSurnameRequired)

    // ----- CLASSE'S FOR ELEMENT'S ----- //
    // Class // "h2", "button (Close)", "form"
    clientBlockTitle.classList.add('modalblock__title')
    clientBlockBtnClose.classList.add('modalblock__button')
    clientBlockForm.classList.add('modalblock__form', 'form')
    // Class // "div (subblock of label & input)"
    clientBlockDivName.classList.add('form__name')
    clientBlockDivLastname.classList.add('form__lastname')
    clientBlockDivSurname.classList.add('form__surname')
    // Class // "input", "label"
    clientBlocklabelName.classList.add('form__name-label')
    clientBlocklabelLastName.classList.add('form__lastname-label')
    clientBlocklabelSurname.classList.add('form__surname-label')
    clientBlockInputName.classList.add('form__name-input')
    clientBlockInputLastName.classList.add('form__lastname-input')
    clientBlockInputSurname.classList.add('form__surname-input')
    // Class // "span (required)" FOR label
    clientBlocklabelNameRequired.classList.add('form__name-label-required')
    clientBlocklabelSurnameRequired.classList.add('form__surname-label-required')
    clientBlockBtnDivAddContact.classList.add('form__addcontact')
    // Class // "button (Add contact)"
    clientBlockBtnAddContact.classList.add('form__addcontact-button', 'btn', 'form__addcontact-button--active')
    // Class // "span (text & icon)"
    clientBlockBtnAddContactIcon.classList.add('form__addcontact-button-icon')
    clientBlockBtnAddContactIconActive.classList.add('form__addcontact-button-hovericon')
    clientBlockBtnAddContactTEXT.classList.add('form__addcontact-button-text')
    // Class // "div (subblock of button Save & Cancel)"
    clientBlockBtnSaveAndCancel.classList.add('form__buttonsgroup')
    // Class // "button (Save & Cancel)"
    clientBlockBtnSave.classList.add('form__buttonsgroup-save', 'btn')
    clientBlockBtnSaveSpinner.classList.add('form__buttonsgroup-save-spinner')
    clientBlockBtnSaveText.classList.add('form__buttonsgroup-text')
    clientBlockBtnCancel.classList.add('form__buttonsgroup-cancel', 'btn')
    
    // ----- EVENT HANDLER'S ----- //
    // Input & Label // Animation-focused for "Label-Name"
    if (clientBlockInputName.value !== '') {
        clientBlocklabelName.classList.add('focused')
    }
    clientBlockInputName.addEventListener('focus', () => {
        clientBlocklabelName.classList.add('focused')
    })
    clientBlockInputName.addEventListener('blur', () => {
        if (!clientBlockInputName.value) {
            clientBlocklabelName.classList.remove('focused')
        }
    })
    // Input & Label // Animation-focused for "Label-Surname"
    if (clientBlockInputSurname.value !== '') {
        clientBlocklabelSurname.classList.add('focused')
    }
    clientBlockInputSurname.addEventListener('focus', () => {
        clientBlocklabelSurname.classList.add('focused')
    })
    clientBlockInputSurname.addEventListener('blur', () => {
        if (!clientBlockInputSurname.value) {
            clientBlocklabelSurname.classList.remove('focused')
        }
    })
    // Input & Label // Animation-focused for "Label-LastName"
    if (clientBlockInputLastName.value !== '') {
        clientBlocklabelLastName.classList.add('focused')
    }
    clientBlockInputLastName.addEventListener('focus', () => {
        clientBlocklabelLastName.classList.add('focused')
    })
    clientBlockInputLastName.addEventListener('blur', () => {
        if (!clientBlockInputLastName.value) {
            clientBlocklabelLastName.classList.remove('focused')
        }
    })
    //
    // Contacts // Add contact in modal window
    clientBlockBtnAddContact.addEventListener('click', (e) => {
        e.preventDefault()

        const contactElements = document.getElementsByClassName('contact')

        if (contactElements.length < 9) {
            const contactElement = createContact()
            clientBlockBtnDivAddContact.prepend(contactElement.contactBlock)
        } else {
            const contactElement = createContact()
            clientBlockBtnDivAddContact.prepend(contactElement.contactBlock)
            clientBlockBtnAddContact.classList.remove('form__addcontact-button--active')
        }
    })

    // // Add // animation-hover for "Svg icons of Add contact"
    // clientBlockBtnAddContact.addEventListener('mousemove', () => {
    //     clientBlockBtnAddContactIcon.classList.remove('form__addcontact-button--active')
    //     clientBlockBtnAddContactIconActive.classList.add('form__addcontact-button--active')
    // })
    // clientBlockBtnAddContact.addEventListener('mouseleave', () => {
    //     clientBlockBtnAddContactIcon.classList.add('form__addcontact-button--active')
    //     clientBlockBtnAddContactIconActive.classList.remove('form__addcontact-button--active')
    // })


    return {
        clientBlockTitle,
        clientBlockForm,
        clientBlocklabelName,
        clientBlocklabelSurname,
        clientBlocklabelLastName,
        clientBlockInputName,
        clientBlockInputLastName,
        clientBlockInputSurname,
        clientBlockBtnClose,
        clientBlockBtnDivAddContact,
        clientBlockBtnAddContact,
        clientBlockBtnSave,
        clientBlockBtnCancel,
        clientBlockBtnSaveSpinner
    }
}