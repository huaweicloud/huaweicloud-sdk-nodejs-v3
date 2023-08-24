

export class FirewallAssociation {
    private 'virsubnet_id'?: string;
    public constructor(virsubnetId?: string) { 
        this['virsubnet_id'] = virsubnetId;
    }
    public withVirsubnetId(virsubnetId: string): FirewallAssociation {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
}