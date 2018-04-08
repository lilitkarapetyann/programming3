class Parent {
    constructor(x,y,index)
    {
        this.x = x;
        this.y = y;
        this.index = index;
        matrix[this.y][this.x] = this.index;
        this.directions = this.directionMaker();
    }

    yntrelVandak(ch) {
        this.directionMaker();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    
    directionMaker()
    {
        var tempArr =[]
        for(var i = -1; i <= 1; i++)
        {
            for(var j = -1; j <= 1; j++)
            {
                tempArr.push([this.x+i, this.y+j]);
            }
        }
        return tempArr; 
    }
}