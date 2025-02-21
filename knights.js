// Step 1: Function to get valid knight moves
function getValidMoves(position) {
    const [x, y] = position;

    // All possible knight moves
    const moves = [
        [x + 2, y + 1], [x + 2, y - 1], 
        [x - 2, y + 1], [x - 2, y - 1], 
        [x + 1, y + 2], [x + 1, y - 2], 
        [x - 1, y + 2], [x - 1, y - 2]
    ];

    // Filter moves within bounds
    return moves.filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8);
}

// Step 2: BFS function to find the shortest path
function bfs(startNode, targetNode) {
    let queue = [[startNode]];  // Store paths instead of just nodes
    let visited = new Set();
    visited.add(JSON.stringify(startNode));

    while (queue.length > 0) {
        let path = queue.shift();  // Get the first path
        let currentNode = path[path.length - 1];  // Last node in the path

        if (JSON.stringify(currentNode) === JSON.stringify(targetNode)) {
            return path;  // Return the shortest path
        }

        for (let neighbor of getValidMoves(currentNode)) {
            if (!visited.has(JSON.stringify(neighbor))) {
                visited.add(JSON.stringify(neighbor));
                queue.push([...path, neighbor]);  // Append neighbor to the current path
            }
        }
    }

    return null;  // No valid path found
}

// Step 3: Knight's move function to display the result
function knightMoves(start, target) {
    let path = bfs(start, target);  // Find shortest path using BFS

    if (path) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        path.forEach(pos => console.log(`[${pos[0]}, ${pos[1]}]`));  // Properly format output
    } else {
        console.log("No valid path found.");
    }
}

// Example call
knightMoves([0, 0], [7, 7]);  // Test case









