<script>
  nextButton = document.querySelector('.next-button');
  prevButton = document.querySelector('.previous-button');

  nextButton.addEventListener('click', function() {
    firstImage = document.querySelector('#FirstImage');
    secondImage = document.querySelector('#SecondImage');

    if(firstImage.classList.contains('show')) {
      firstImage.classList.remove('show');
      firstImage.classList.add('hide');

      secondImage.classList.remove('hide');
      secondImage.classList.add('show');
    } else {
      firstImage.classList.add('show');
      firstImage.classList.remove('hide');

      secondImage.classList.add('hide');
      secondImage.classList.remove('show');
    }
  });

  prevButton.addEventListener('click', function() {
    firstImage = document.querySelector('#FirstImage');
    secondImage = document.querySelector('#SecondImage');

    if(firstImage.classList.contains('show')) {
      firstImage.classList.remove('show');
      firstImage.classList.add('hide');

      secondImage.classList.remove('hide');
      secondImage.classList.add('show');
    } else {
      firstImage.classList.add('show');
      firstImage.classList.remove('hide');

      secondImage.classList.add('hide');
      secondImage.classList.remove('show');
    }
  });
</script>
