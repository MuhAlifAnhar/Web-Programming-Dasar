setTimeout(function () {
    document.body.style.backgroundColor = 'red';
        setTimeout(function () {
            document.body.style.backgroundColor = 'yellow';
                setTimeout(function () {
                    document.body.style.backgroundColor = 'green';
                        setTimeout(function () {
                            document.body.style.backgroundColor = 'blue';
                        }, 1000);
                }, 1000);
        }, 1000);
}, 1000);

// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
// }, 2000);

// setTimeout(function () {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);