

export class RestoreDetails {
    private 'destination_path'?: string;
    public constructor(destinationPath?: string) { 
        this['destination_path'] = destinationPath;
    }
    public withDestinationPath(destinationPath: string): RestoreDetails {
        this['destination_path'] = destinationPath;
        return this;
    }
    public set destinationPath(destinationPath: string  | undefined) {
        this['destination_path'] = destinationPath;
    }
    public get destinationPath(): string | undefined {
        return this['destination_path'];
    }
}