import { CombinedOrder } from './CombinedOrder';


export class VaultCreateParameters {
    private 'combined_order'?: CombinedOrder;
    public constructor() { 
    }
    public withCombinedOrder(combinedOrder: CombinedOrder): VaultCreateParameters {
        this['combined_order'] = combinedOrder;
        return this;
    }
    public set combinedOrder(combinedOrder: CombinedOrder  | undefined) {
        this['combined_order'] = combinedOrder;
    }
    public get combinedOrder(): CombinedOrder | undefined {
        return this['combined_order'];
    }
}