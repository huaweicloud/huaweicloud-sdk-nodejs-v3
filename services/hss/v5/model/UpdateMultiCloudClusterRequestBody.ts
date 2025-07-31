

export class UpdateMultiCloudClusterRequestBody {
    private 'current_expiration_date'?: number;
    public upgrade?: boolean;
    public kubeconfig?: string;
    public constructor(currentExpirationDate?: number) { 
        this['current_expiration_date'] = currentExpirationDate;
    }
    public withCurrentExpirationDate(currentExpirationDate: number): UpdateMultiCloudClusterRequestBody {
        this['current_expiration_date'] = currentExpirationDate;
        return this;
    }
    public set currentExpirationDate(currentExpirationDate: number  | undefined) {
        this['current_expiration_date'] = currentExpirationDate;
    }
    public get currentExpirationDate(): number | undefined {
        return this['current_expiration_date'];
    }
    public withUpgrade(upgrade: boolean): UpdateMultiCloudClusterRequestBody {
        this['upgrade'] = upgrade;
        return this;
    }
    public withKubeconfig(kubeconfig: string): UpdateMultiCloudClusterRequestBody {
        this['kubeconfig'] = kubeconfig;
        return this;
    }
}