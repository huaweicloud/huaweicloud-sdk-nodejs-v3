

export class VolumesForBatchResizeVolume {
    public id?: string;
    private 'new_size'?: number;
    public constructor(id?: string, newSize?: number) { 
        this['id'] = id;
        this['new_size'] = newSize;
    }
    public withId(id: string): VolumesForBatchResizeVolume {
        this['id'] = id;
        return this;
    }
    public withNewSize(newSize: number): VolumesForBatchResizeVolume {
        this['new_size'] = newSize;
        return this;
    }
    public set newSize(newSize: number  | undefined) {
        this['new_size'] = newSize;
    }
    public get newSize(): number | undefined {
        return this['new_size'];
    }
}