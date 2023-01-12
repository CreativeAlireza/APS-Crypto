export function combinatorFirstLast(parent, first, last) {
    parent.insertAdjacentHTML('afterbegin', first());
    parent.insertAdjacentHTML('beforeend', last());
}