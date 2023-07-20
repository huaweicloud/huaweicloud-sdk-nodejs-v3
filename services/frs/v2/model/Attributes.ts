import { AttributesExpression } from './AttributesExpression';
import { Dress } from './Dress';
import { FaceQuality } from './FaceQuality';


export class Attributes {
    public dress?: Dress;
    public glass?: string;
    public hat?: string;
    public age?: number;
    public mask?: string;
    public beard?: string;
    public phototype?: string;
    public quality?: FaceQuality;
    public hair?: string;
    public expression?: AttributesExpression;
    private 'face_angle'?: number;
    public constructor(dress?: Dress, glass?: string, hat?: string, age?: number, mask?: string, beard?: string, phototype?: string, quality?: FaceQuality, hair?: string, expression?: AttributesExpression, faceAngle?: number) { 
        this['dress'] = dress;
        this['glass'] = glass;
        this['hat'] = hat;
        this['age'] = age;
        this['mask'] = mask;
        this['beard'] = beard;
        this['phototype'] = phototype;
        this['quality'] = quality;
        this['hair'] = hair;
        this['expression'] = expression;
        this['face_angle'] = faceAngle;
    }
    public withDress(dress: Dress): Attributes {
        this['dress'] = dress;
        return this;
    }
    public withGlass(glass: string): Attributes {
        this['glass'] = glass;
        return this;
    }
    public withHat(hat: string): Attributes {
        this['hat'] = hat;
        return this;
    }
    public withAge(age: number): Attributes {
        this['age'] = age;
        return this;
    }
    public withMask(mask: string): Attributes {
        this['mask'] = mask;
        return this;
    }
    public withBeard(beard: string): Attributes {
        this['beard'] = beard;
        return this;
    }
    public withPhototype(phototype: string): Attributes {
        this['phototype'] = phototype;
        return this;
    }
    public withQuality(quality: FaceQuality): Attributes {
        this['quality'] = quality;
        return this;
    }
    public withHair(hair: string): Attributes {
        this['hair'] = hair;
        return this;
    }
    public withExpression(expression: AttributesExpression): Attributes {
        this['expression'] = expression;
        return this;
    }
    public withFaceAngle(faceAngle: number): Attributes {
        this['face_angle'] = faceAngle;
        return this;
    }
    public set faceAngle(faceAngle: number  | undefined) {
        this['face_angle'] = faceAngle;
    }
    public get faceAngle(): number | undefined {
        return this['face_angle'];
    }
}