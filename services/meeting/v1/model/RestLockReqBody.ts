

export class RestLockReqBody {
    public isLock?: number;
    public constructor(isLock?: number) { 
        this['isLock'] = isLock;
    }
    public withIsLock(isLock: number): RestLockReqBody {
        this['isLock'] = isLock;
        return this;
    }
}