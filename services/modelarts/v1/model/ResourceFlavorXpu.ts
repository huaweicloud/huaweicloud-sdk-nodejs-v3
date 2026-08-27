

export class ResourceFlavorXpu {
    public type?: string;
    public size?: string;
    public memory?: string;
    public card?: string;
    public chip?: string;
    public constructor() { 
    }
    public withType(type: string): ResourceFlavorXpu {
        this['type'] = type;
        return this;
    }
    public withSize(size: string): ResourceFlavorXpu {
        this['size'] = size;
        return this;
    }
    public withMemory(memory: string): ResourceFlavorXpu {
        this['memory'] = memory;
        return this;
    }
    public withCard(card: string): ResourceFlavorXpu {
        this['card'] = card;
        return this;
    }
    public withChip(chip: string): ResourceFlavorXpu {
        this['chip'] = chip;
        return this;
    }
}