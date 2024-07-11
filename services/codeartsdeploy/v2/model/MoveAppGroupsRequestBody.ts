

export class MoveAppGroupsRequestBody {
    public id?: string;
    public movement?: MoveAppGroupsRequestBodyMovementEnum | number;
    public constructor(id?: string, movement?: number) { 
        this['id'] = id;
        this['movement'] = movement;
    }
    public withId(id: string): MoveAppGroupsRequestBody {
        this['id'] = id;
        return this;
    }
    public withMovement(movement: MoveAppGroupsRequestBodyMovementEnum | number): MoveAppGroupsRequestBody {
        this['movement'] = movement;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MoveAppGroupsRequestBodyMovementEnum {
    NUMBER_1 = 1,
    NUMBER_MINUS_1 = -1
}
