<script>
    (() ={">"} {
        document.querySelectorAll('.js-speaker-form').forEach(El => {
            El.addEventListener('submit', e => {
                e.preventDefault();
                new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
                e.currentTarget.reset();
            });
        })
            })();
</script>