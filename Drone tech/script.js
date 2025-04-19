// Function to navigate between pages
function navigateTo(page) {
    window.location.href = page;
}

// Event listener for the order form submission
document.addEventListener('DOMContentLoaded', function () {
    const deliveryForm = document.getElementById('delivery-form');
    const trackButton = document.getElementById('track-button');

    if (deliveryForm) {
        deliveryForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const item = document.getElementById('item').value;
            const address = document.getElementById('address').value;

            // Simulate order submission
            alert(`Order placed for ${item} to be delivered at ${address}.`);

            // Clear the form
            deliveryForm.reset();
        });
    }

    if (trackButton) {
        trackButton.addEventListener('click', function () {
            const trackingId = document.getElementById('tracking-id').value;

            // Simulate tracking delivery
            const trackingInfo = `Tracking ID: ${trackingId} - Your drone is currently on its way!`;
            document.getElementById('tracking-info').innerText = trackingInfo;
        });
    }
});
