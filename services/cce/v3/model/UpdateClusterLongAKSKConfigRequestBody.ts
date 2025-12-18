

export class UpdateClusterLongAKSKConfigRequestBody {
    public enableLongAKSK?: boolean;
    public constructor(enableLongAKSK?: boolean) { 
        this['enableLongAKSK'] = enableLongAKSK;
    }
    public withEnableLongAKSK(enableLongAKSK: boolean): UpdateClusterLongAKSKConfigRequestBody {
        this['enableLongAKSK'] = enableLongAKSK;
        return this;
    }
}