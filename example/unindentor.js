(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.unindentor = factory(root.b);
    }
}(this, function () {
    'use strict';

    function unindentElementList(elementList) {
        elementList = formatElementList(elementList);
        for (var i = 0; i < elementList.length; i++) {
            unindentElement(elementList[i]);
        }
    }

    function formatElementList(elementList) {
        if (typeof elementList == 'string') {
            elementList = document.querySelectorAll(elementList);
        }
        elementList = Array.prototype.slice.call(elementList);
        return elementList;
    }

    function unindentElement(element) {
        element.innerHTML = unindentText(element.innerHTML);
    }

    function unindentText(text) {
        var result = [];
        var indentation = false;
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (indentation === false) {
                indentation = findIndentation(line);
                if (indentation === false) {
                    continue;
                }
            }
            line = unindentLine(line, indentation);
            result.push(line);
        }
        return rtrim(result.join('\n'));
    }

    function unindentLine(line, indentation) {
        if (line.startsWith(indentation)) {
            line = line.substr(indentation.length);
        }
        return line;
    }

    function findIndentation(line) {
        var trimmed = line.trim();
        if (!trimmed) {
            return false;
        }
        return line.substr(0, line.indexOf(trimmed[0]));
    }

    function startsWith(str, prefix) {
        return str.slice(0, prefix.length) == prefix;
    }

    function rtrim(str) {
        return str.replace(/\s+$/, '');
    }

    return {
        unindentElementList: unindentElementList,
        unindentElement: unindentElement,
        unindentText: unindentText
    }
}));