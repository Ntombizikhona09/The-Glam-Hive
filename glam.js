function search_service() {
    const input = document.getElementById('searchbar');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('list');
    const li = ul.getElementsByTagName('li');

    if (filter) {
        ul.style.display = 'block';
        for (let i = 0; i < li.length; i++) {
            const textValue = li[i].textContent || li[i].innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    } else {
        ul.style.display = 'none';
    }
}
// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Display the success modal
    var successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    // Optionally, you can reset the form
    document.getElementById('contactForm').reset();
});


