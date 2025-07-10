

export class MergeRequestListDtoUser {
    private 'can_merge'?: boolean;
    public constructor() { 
    }
    public withCanMerge(canMerge: boolean): MergeRequestListDtoUser {
        this['can_merge'] = canMerge;
        return this;
    }
    public set canMerge(canMerge: boolean  | undefined) {
        this['can_merge'] = canMerge;
    }
    public get canMerge(): boolean | undefined {
        return this['can_merge'];
    }
}