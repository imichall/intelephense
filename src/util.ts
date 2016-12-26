/* Copyright © Ben Mewburn ben@mewburn.id.au
 * Licensed under the MIT Licence.
 */

'use strict';

import { Position } from 'php7parser';

export function popMany<T>(array: T[], count: number) {
    let popped: T[] = [];
    while (count--) {
        popped.push(array.pop());
    }
    return popped.reverse();
}

export function top<T>(array: T[]) {
    return array.length ? array[array.length - 1] : null;
}

export function isString(s: any) {
    return typeof (s) === 'string' || s instanceof String;
}

export function isInRange(position: Position, startRange: Position, endRange: Position) {

    return (position.line > startRange.line ||
        (position.line === startRange.line && position.char >= startRange.char)) &&
        (position.line < endRange.line ||
            (position.line === endRange.line && position.char <= endRange.char));

}