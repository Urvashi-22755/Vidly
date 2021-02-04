import _ from 'lodash';

export function paginate(movies, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(movies).slice(startIndex).take(pageSize).value();
    //conveert movies into obejct.
    //slice elemenmts starting forn index till the end
    //take only 4(PS) records from sliced array
    //convert object again to array usng value()
}