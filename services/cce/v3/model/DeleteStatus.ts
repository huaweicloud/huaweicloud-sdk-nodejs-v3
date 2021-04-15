

export class DeleteStatus {
    public added?: number;
    private 'current_total'?: number | undefined;
    public deleted?: number;
    private 'previous_total'?: number | undefined;
    public updated?: number;
    public constructor() { 
    }
    public withAdded(added: number): DeleteStatus {
        this['added'] = added;
        return this;
    }
    public withCurrentTotal(currentTotal: number): DeleteStatus {
        this['current_total'] = currentTotal;
        return this;
    }
    public set currentTotal(currentTotal: number | undefined) {
        this['current_total'] = currentTotal;
    }
    public get currentTotal() {
        return this['current_total'];
    }
    public withDeleted(deleted: number): DeleteStatus {
        this['deleted'] = deleted;
        return this;
    }
    public withPreviousTotal(previousTotal: number): DeleteStatus {
        this['previous_total'] = previousTotal;
        return this;
    }
    public set previousTotal(previousTotal: number | undefined) {
        this['previous_total'] = previousTotal;
    }
    public get previousTotal() {
        return this['previous_total'];
    }
    public withUpdated(updated: number): DeleteStatus {
        this['updated'] = updated;
        return this;
    }
}