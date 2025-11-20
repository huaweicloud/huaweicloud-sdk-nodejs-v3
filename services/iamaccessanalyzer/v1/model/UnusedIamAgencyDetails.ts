

export class UnusedIamAgencyDetails {
    private 'last_accessed'?: Date;
    public constructor() { 
    }
    public withLastAccessed(lastAccessed: Date): UnusedIamAgencyDetails {
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