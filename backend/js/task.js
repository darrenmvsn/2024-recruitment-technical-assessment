
/**
 * Task 1
 */
function leafFiles(files) {
    let allLeaf = [];
    for (let i = 0; i < files.length; i++) {
        let isLeaf = true;
        for (let j = 0; j < files.length; j++) {
            if (files[j].parent === files[i].id) {
                isLeaf = false;
                break;
            }
        }
        if (isLeaf) {
            allLeaf.push(files[i].name);
        }
    }
    
    return allLeaf;
}

/**
 * Task 1
 */
function kLargestCategories(files, k) {
    let allCatFile = files.flatMap((file) => file.categories).sort()
    // Count occurrences of each category
    let categoryCounts = allCatFile.reduce((counts, category) => {
        counts[category] = (counts[category] || 0) + 1;
        return counts;
    }, {});
    let allCatFileSorted = Object.keys(categoryCounts).sort((a, b) => categoryCounts[b] - categoryCounts[a]);
    // console.log(allCatFileSorted.splice(0,k));
    return allCatFileSorted.splice(0,k);
}

/**
 * Task 1
 */

function largestFileSize(files) {
    // Create a map to store folder sizes
    const folderSizes = new Map();

    // Iterate through each file object
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // If the file is a folder
        if (file.categories.includes("Folder")) {
            // Call a recursive function to calculate the folder size
            const folderSize = calculateFolderSize(files, file.id);
            // Update folderSizes map with the folder ID and its size
            folderSizes.set(file.id, folderSize);
        }
    }

    // Find the largest folder size
    let largestSize = 0;
    for (const size of folderSizes.values()) {
        if (size > largestSize) {
            largestSize = size;
        }
    }

    return largestSize;
}

// Recursive function to calculate the size of a folder and its subfolders
function calculateFolderSize(files, folderId) {
    let folderSize = 0;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.parent === folderId) {
            if (file.categories.includes("Folder")) {
                // If the file is a subfolder, recursively calculate its size
                folderSize += calculateFolderSize(files, file.id);
            } else {
                // If the file is not a folder, add its size to the folder size
                folderSize += file.size;
            }
        }
    }
    return folderSize;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];
console.log(largestFileSize(testFiles));
console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(largestFileSize(testFiles) == 20992)
