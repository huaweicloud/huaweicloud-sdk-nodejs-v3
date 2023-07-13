

export class DisasterRecoveryId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): DisasterRecoveryId {
        this['id'] = id;
        return this;
    }
}