async function handleFormSubmit(e, formId, successId) {
    e.preventDefault();
    const form = document.getElementById(formId);
    const successMsg = document.getElementById(successId);
    const button = form.querySelector('button[type="submit"]');

    button.disabled = true;
    button.textContent = 'Sending...';

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.reset();
            successMsg.style.display = 'block';
            button.style.display = 'none';
        } else {
            button.textContent = 'Something went wrong. Try again.';
            button.disabled = false;
        }
    } catch {
        button.textContent = 'Network error. Try again.';
        button.disabled = false;
    }
}

document.getElementById('contactForm')
    .addEventListener('submit', e => handleFormSubmit(e, 'contactForm', 'contactSuccess'));

document.getElementById('newsletterForm')
    .addEventListener('submit', e => handleFormSubmit(e, 'newsletterForm', 'newsletterSuccess'));