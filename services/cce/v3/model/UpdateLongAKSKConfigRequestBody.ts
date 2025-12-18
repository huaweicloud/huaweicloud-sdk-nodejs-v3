

export class UpdateLongAKSKConfigRequestBody {
    public enableLongAKSKInNewCluster?: boolean;
    public constructor(enableLongAKSKInNewCluster?: boolean) { 
        this['enableLongAKSKInNewCluster'] = enableLongAKSKInNewCluster;
    }
    public withEnableLongAKSKInNewCluster(enableLongAKSKInNewCluster: boolean): UpdateLongAKSKConfigRequestBody {
        this['enableLongAKSKInNewCluster'] = enableLongAKSKInNewCluster;
        return this;
    }
}