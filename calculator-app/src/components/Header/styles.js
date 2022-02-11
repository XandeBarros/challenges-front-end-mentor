import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  color: ${({ theme }) => theme.headerColor};

  #theme-selector {
    width: 10rem;
    display: flex;
    align-items: baseline;
  }

  #toggle {
    width: 8rem;
    background: ${({ theme }) => theme.keypadBg};
    height: 1.5rem;
    padding: 4px;
    border-radius: .75rem;
  }
  
  #toggle label {
    font-family: inherit;
    display: inline-block;
    color: #95A5A6;
    position: relative;
    z-index: 2;
    margin-right: 1rem;
    text-align: center;
    padding: 2px 3px;
    font-size: 15px; 
  }

  #trd {
    margin-right: 0;
  }

  #toggle input {
    /* display: none; */
    position: absolute;
    z-index: 3;
    opacity: 0;
    cursor: pointer;
  }

  div span {
    height: 16px;
    width: 16px;
    line-height: 21px;
    border-radius: 50%;
    background:#fff;
    display: block;
    position: relative;
    left: 22px;
    top: -2.35rem;
    transition:all 0.3s ease-in-out;
  }


  p {
    display: inline;
    margin-left: auto;
    font-size: .75rem;
  }

  input[value="normal"]:checked ~ span{
    background: ${({ theme }) => theme.equalBg};
    left:2px;
    color:#fff;
  }

  #toggle input[value="dark"]:checked ~ span{
    background: ${({ theme }) => theme.equalBg};
    left: 2.65rem;
  }
  #toggle input[value="light"]:checked ~ span{
    background: ${({ theme }) => theme.equalBg};
    left: 1.25rem;
  }

  #toggle input[value="normal"]:checked + label, #toggle input[value="true"]:checked + label{
    color:#fff;
  }
  #toggle input[value="light"]:checked + label{
    color:#fff;
  }

  #label {
    background: none;
    position: relative;
    left: 3.55rem;
    top: -1.5rem;
    display: flex;
    justify-content: space-between;
    width: 6rem;
  }
`;