document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const totalPriceElement = document.getElementById('total-price');

    form.addEventListener('change', () => {
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        let totalPrice = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                totalPrice += parseFloat(checkbox.getAttribute('data-price'));
            }
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const calculateTotalButton = document.getElementById('calculate-total');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        let totalPrice = 0;

        document.querySelectorAll('.product-checkbox:checked').forEach(function(checkbox) {
            totalPrice += parseFloat(checkbox.getAttribute('data-price'));
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    document.querySelectorAll('.add-to-order').forEach(function(button) {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const checkbox = document.getElementById(productId);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                updateTotalPrice();
            }
        });
    });

    calculateTotalButton.addEventListener('click', updateTotalPrice);
});

