

export class UnusedIamUserPasswordDetails {
    private 'last_accessed'?: Date;
    public constructor() { 
    }
    public withLastAccessed(lastAccessed: Date): UnusedIamUserPasswordDetails {
        this['last_accessed'] = lastAccessed;
        return this;
    }
    public set lastAccessed(lastAccessed: Date  | undefined) {
        this['last_accessed'] = lastAccessed;
    }
    public get lastAccessed(): Date | undefined {
        return this['last_accessed'];
    }
}