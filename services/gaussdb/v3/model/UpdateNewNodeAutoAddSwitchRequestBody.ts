

export class UpdateNewNodeAutoAddSwitchRequestBody {
    private 'switch_status'?: string;
    public weight?: number;
    public constructor(switchStatus?: string) { 
        this['switch_status'] = switchStatus;
    }
    public withSwitchStatus(switchStatus: string): UpdateNewNodeAutoAddSwitchRequestBody {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
    public withWeight(weight: number): UpdateNewNodeAutoAddSwitchRequestBody {
        this['weight'] = weight;
        return this;
    }
}