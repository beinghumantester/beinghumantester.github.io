// Create a new file: assets/js/wilt.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle content visibility
    window.toggleContent = function(button) {
        const entry = button.closest('.timeline-content');
        const preview = entry.querySelector('.entry-preview');
        const full = entry.querySelector('.entry-full');
        
        preview.classList.toggle('hidden');
        full.classList.toggle('hidden');
    };

    // Function to filter entries
    function filterEntries(category) {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to the button with matching category
        document.querySelector(`.filter-btn[data-category="${category}"]`).classList.add('active');
        
        document.querySelectorAll('.timeline-entry').forEach(entry => {
            if (category === 'all' || entry.dataset.category === category) {
                entry.style.display = 'block';
            } else {
                entry.style.display = 'none';
            }
        });
    }

    // Event listeners for filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterEntries(this.dataset.category);
        });
    });

    // Event listeners for category tags
    document.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const category = this.dataset.category;
            filterEntries(category);
        });
    });
});