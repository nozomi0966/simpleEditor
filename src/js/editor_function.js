// 現在編集しているファイル
let now_editing_filename;

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// +++++ 左側のバーの操作

// ファイルを読み込みEditorにセットする関数
// ---------------------------------------------------------------------------------
const readFile = function (filepath) {
    const path = filedirectory + filepath;
    fs.readFile(path, function (error, text) {
        editor.setValue(
            text.toString(),
            1);
    });
}
// ---------------------------------------------------------------------------------
// 保存する関数
const saveFile = function () {
    fs.writeFileSync(filedirectory + now_editing_filename, editor.getValue());
}
// ---------------------------------------------------------------------------------

// すべての左側のファイル一覧の色を変える
const change_files_background_color = function () {
    $("[id=memobar]").css('background', 'GhostWhite');
}

// 左側のファイルがクリックされた際、ファイルを読み込み、Editorで編集できるようにする。
// ---------------------------------------------------------------------------------
const select_file = function (e) {
    $(e.target).find('text').each(function () {
        now_editing_filename = $(this).text();
    });
    change_files_background_color();
    $('#' + now_editing_filename).parent().css('background', 'MistyRose');
    readFile(now_editing_filename);
}

$("#leftside").on("click", select_file);
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// +++++ 右側のバーの操作

// オートセーブ機能
// ---------------------------------------------------------------------------------
$("#rightside").on("keydown", function () {
    autoSave(saveFile);
});

function autoSave(callback) {
    callback();
}


// ---------------------------------------------------------------------------------

