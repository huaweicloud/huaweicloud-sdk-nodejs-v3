

export class GcbLocalArea {
    private 'local_area'?: string;
    public constructor() { 
    }
    public withLocalArea(localArea: string): GcbLocalArea {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
}