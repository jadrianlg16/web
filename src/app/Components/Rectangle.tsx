//Greenrectangle.tsx

interface RectangleProps{
    color: string;
}

export default function Rectangle({color}: RectangleProps) {
    return(
        <div style={{backgroundColor: color}} className="w-128 h-32 items-center justify-center "></div>
    );

};


