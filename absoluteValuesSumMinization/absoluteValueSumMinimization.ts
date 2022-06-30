

export function getAbsSumMinimizationValue(arr: number[]): number {
    let median_idx = (arr.length - arr.length % 2) / 2;
    arr.sort(
        (a,b) => (a-b)
    );

    if (arr.length % 2 == 0) {
        median_idx = median_idx - 1;
    }

    return arr[median_idx];
}


