

export class RackInfo {
    public power?: number;
    public size?: string;
    private 'has_lock'?: boolean;
    public constructor() { 
    }
    public withPower(power: number): RackInfo {
        this['power'] = power;
        return this;
    }
    public withSize(size: string): RackInfo {
        this['size'] = size;
        return this;
    }
    public withHasLock(hasLock: boolean): RackInfo {
        this['has_lock'] = hasLock;
        return this;
    }
    public set hasLock(hasLock: boolean  | undefined) {
        this['has_lock'] = hasLock;
    }
    public get hasLock(): boolean | undefined {
        return this['has_lock'];
    }
}