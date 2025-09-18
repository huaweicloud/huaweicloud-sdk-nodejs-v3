

export class Destination {
    public destination?: string;
    public constructor(destination?: string) { 
        this['destination'] = destination;
    }
    public withDestination(destination: string): Destination {
        this['destination'] = destination;
        return this;
    }
}