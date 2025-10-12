// #region JavaScript Puro
// document.querySelectorAll('.kanban-card').forEach(card => {
//     card.addEventListener('dragstart', e => {
//         e.currentTarget.classList.add('dragging');
//     })

//     card.addEventListener('dragend', e => {
//         e.currentTarget.classList.remove('dragging');
//     })
// })

// document.querySelectorAll('.kanban-cards').forEach(column => {
//     column.addEventListener('dragover', e => {
//         e.preventDefault();
//         e.currentTarget.classList.add('cards-hover');
//     })

//     column.addEventListener('dragleave', e => {
//         e.currentTarget.classList.remove('cards-hover');
//     })

//     column.addEventListener('drop', e => {
//         e.currentTarget.classList.remove('cards-hover');

//         const dragCard = document.querySelector('.kanban-card.dragging');

//         e.currentTarget.appendChild(dragCard);
//     })
// })
// #endregion

// #region jQuery
$(function () {
    // Isso é igual a $(document).ready(), mas mais curto
    $('.kanban-card').on('dragstart', function () {
        $(this).addClass('dragging');
    });

    $('.kanban-card').on('dragend', function () {
        $(this).removeClass('dragging');
    });

    $('.kanban-cards').on('dragover', function (e) {
        e.preventDefault();
        $(this).addClass('cards-hover');
    });

    $('.kanban-cards').on('dragleave', function () {
        $(this).removeClass('cards-hover');
    });

    $('.kanban-cards').on('drop', function (e) {
        e.preventDefault();
        $(this).removeClass('cards-hover');

        const $dragCard = $('.kanban-card.dragging');
        $(this).append($dragCard);
    });
});
// #endregion
