export function getCourses() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: '1', name: 'web全栈开发', price: 99 },
                { id: '2', name: 'web高级开发', price: 160 }
            ])
        }, 2000);
    });
}
