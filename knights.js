
function getValidMoves(position) {
    const [x, y] = position;

  
    const moves = [
        [x + 2, y + 1], [x + 2, y - 1], 
        [x - 2, y + 1], [x - 2, y - 1], 
        [x + 1, y + 2], [x + 1, y - 2], 
        [x - 1, y + 2], [x - 1, y - 2]
    ];

  
    return moves.filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8);
}


function bfs(startNode, targetNode) {
    let queue = [[startNode]];  
    let visited = new Set();
    visited.add(JSON.stringify(startNode));

    while (queue.length > 0) {
        let path = queue.shift(); 
        let currentNode = path[path.length - 1];  

        if (JSON.stringify(currentNode) === JSON.stringify(targetNode)) {
            return path;  
        }

        for (let neighbor of getValidMoves(currentNode)) {
            if (!visited.has(JSON.stringify(neighbor))) {
                visited.add(JSON.stringify(neighbor));
                queue.push([...path, neighbor]);  
            }
        }
    }

    return null;  
}


function knightMoves(start, target) {
    let path = bfs(start, target);  

    if (path) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        path.forEach(pos => console.log(`[${pos[0]}, ${pos[1]}]`));  
    } else {
        console.log("No valid path found.");
    }
}


knightMoves([0, 0], [7, 7]);  









