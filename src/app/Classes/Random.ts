export class Random {
    static floatInRange(lower: number, higher: number): number {
        if (higher < lower) {const pocket = lower; lower = higher; higher = pocket; }
        return lower + Math.random() * (higher - lower);
    }
    static intInRange(lower: number, higher: number): number {
        if (higher < lower) {const pocket = lower; lower = higher; higher = pocket; }
        return lower + Math.floor(Math.random() * (higher - lower + 1));
    }
    static randomBoolean(probability: number): boolean {
        return Math.random() < probability;
    }
    static randomName(numchar: number, titleCase: boolean = true): string {
        if (numchar < 0) {numchar = 0; }
        let res = '';
        for (let i = 0; i < numchar; i++) {res = res + String.fromCharCode(Random.intInRange(97, 122)); }
        if (titleCase) {res = res.slice(0, 1).toUpperCase() + res.slice(1); }
        return res;
    }
}
