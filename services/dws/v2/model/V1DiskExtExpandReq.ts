

export class V1DiskExtExpandReq {
    private 'new_size'?: number;
    public constructor() { 
    }
    public withNewSize(newSize: number): V1DiskExtExpandReq {
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