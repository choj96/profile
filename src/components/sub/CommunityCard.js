import React from "react";

const CommunityCard = ({
  item,
  inputEdit,
  textareaEdit,
  disableUpdate,
  updatePost,
  enableUpdate,
  deletePost,
  index,
}) => {
  return (
    <>
      <article>
        {item.enableUpdate ? (
          <>
            <div className="txt">
              <input
                type="text"
                defaultValue={item.title}
                placeholder="제목을 입력하세요."
                ref={inputEdit}
              />
              <br />
              <textarea
                cols="30"
                rows="5"
                defaultValue={item.content}
                placeholder="내용을 입력해 주세요."
                ref={textareaEdit}
              ></textarea>
            </div>
            <div className="btnSet">
              <button onClick={() => disableUpdate(index)}>CANCEL</button>
              <button onClick={() => updatePost(index)}>SAVE</button>
            </div>
          </>
        ) : (
          <>
            <div className="txt">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
            <div className="btnSet">
              {/* 업데이트 기능 */}
              <button onClick={() => enableUpdate(index)}>EDIT</button>
              {/* 삭제기능 */}
              <button onClick={() => deletePost(index)}>DELETE</button>
            </div>
          </>
        )}
      </article>
    </>
  );
};

export default CommunityCard;
